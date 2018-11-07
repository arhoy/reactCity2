// add or edit matches
import React, { Component } from 'react';
import DashboardLayout from '../../../hoc/DashboardLayout/DashboardLayout';
import Input from '../../../components/UI/Input/Input';
import classes from './DashboardMatches.css';
import { firebaseMatches, firebaseDB, firebaseTeams } from '../../../resources/firebase';
import { firebaseLooper, validate } from '../../UI/Util/Helpers';
import Button from '../../UI/Button/Button';


class DashboardMatches extends Component {
    state = {
        matchId:'',
        formType: '',
        formError:false,
        formSuccess:'',
        teams: [],
        formData:{
            date:{
                element:'input',
                value:'',
                config:{
                    name: 'date_input',
                    type: 'date',
                    label: 'Event Date',
                    displaylabel: 'Yes'
                },
                validation: {
                    required:true,
                    date:true
                },
                valid: false,
                valdiationMessage: '',
                showLabel: true
            },
            local:{
                element:'select',
                value:'',
                config:{
                    name: 'select_local_team',
                    type: 'select',
                    label: 'Local Team',
                    displaylabel: 'Yes',
                    options: []
                },
                validation: {
                    required:true
                },
                valid: false,
                valdiationMessage: '',
                showLabel: false
            },
            resultLocal:{
                element:'input',
                value:'',
                config:{
                    name: 'result_local_input',
                    type: 'number',
                    label: 'Result Local',
                    displaylabel: 'Yes'
                },
                validation: {
                    required:true
                },
                valid: false,
                valdiationMessage: '',
                showLabel: true
            },
            away:{
                element:'select',
                value:'',
                config:{
                    name: 'select_away_team',
                    type: 'select',
                    label: 'Away Team',
                    displaylabel: 'Yes',
                    options: []
                },
                validation: {
                    required:true
                },
                valid: false,
                valdiationMessage: '',
                showLabel: false
            },
            resultAway:{
                element:'input',
                value:'',
                config:{
                    name: 'result_local_away',
                    type: 'number',
                    label: 'Result Away',
                    displaylabel: 'Yes'
                },
                validation: {
                    required:true
                },
                valid: false,
                valdiationMessage: '',
                showLabel: true
            },
            referee:{
                element:'input',
                value:'',
                config:{
                    name: 'Ref',
                    type: 'text',
                    label: 'Referee',
                    displaylabel: 'Yes'
                },
                validation: {
                    required:true
                },
                valid: false,
                valdiationMessage: '',
                showLabel: true
            },
            stadium:{
                element:'input',
                value:'',
                config:{
                    name: 'Stadium',
                    type: 'text',
                    label: 'Stadium',
                    displaylabel: 'Yes'
                },
                validation: {
                    required:true
                },
                valid: false,
                valdiationMessage: '',
                showLabel: true
            },
            result:{
                element:'select',
                value:'',
                config:{
                    name: 'select_result',
                    type: 'select',
                    label: 'Team Result',
                    displaylabel: 'Yes',
                    options: [
                        {value: '',displayValue:'Select Result',selected: true,disabled:true,hidden:true},
                        {value: 'W',displayValue:'Win'},
                        {value: 'D',displayValue:'Draw'},
                        {value: 'L',displayValue:'Loss'},
                        {value: 'N/A',displayValue:'N/A'}
                    ]
                },
                validation: {
                    required:true
                },
                valid: false,
                valdiationMessage: '',
                showLabel: false
            },
            final:{
                element:'select',
                value:'',
                config:{
                    name: 'select_final',
                    type: 'select',
                    label: 'Final',
                    displaylabel: 'Yes',
                    options: [
                         {value: '',displayValue:'Select Result', selected: true, disabled:true,hidden:false},
                        {value: 'Y',displayValue:'Yes'},
                        {value: 'N',displayValue:'No'}
                    ]
                },
                validation: {
                    required:true
                },
                valid: false,
                valdiationMessage: '',
                showLabel: false
            },
        
        }
    }


     updateFields = (match,teamOptions,teams,type,matchId) =>{
        const newFormData = {...this.state.formData};
       
            // examples of keys are local, away, referee.
            // the keys inside match and newFormData are the same by design
            for (let key in newFormData){
                if(match){
                    newFormData[key].value = match[key];
                    newFormData[key].valid = true;
                }
                // update the options for these two specific keys.
                if( key === 'local' || key === 'away'){
                    newFormData[key].config.options = teamOptions;
                 }
            }     
                   
       
         // upddate the state
         this.setState({
             matchId,
             formType:type,
             formData:newFormData,
             teams
            });
    }


    componentDidMount(){
        const matchId = this.props.match.params.id;

        const getTeams = (match,type)=>{
            //firebaseTeams contains the name of each team.
            firebaseTeams.once('value')
                .then((snapshot)=>{
                    const teams = firebaseLooper(snapshot);
                    const teamOptions = [];
                    snapshot.forEach((childSnapshot) => {
                        teamOptions.push({
                            value:childSnapshot.val().shortName,
                            displayValue:childSnapshot.val().name
                        })
                    });
                 //   console.log(teamOptions); // pass this list to the local and away team options
                 // update the fields now
                 this.updateFields(match,teamOptions,teams,type,matchId)
                })
        }
          
        if(!matchId){
            // ADD a Match
            getTeams(false,'Add Match');
        }
        else{
            // Edit Match
                // URL below is refering to the firebase Database
                // we want to go inside the matches database and locate the match id
                // the matchId is the matchId you are going to be editing. It comes from the URL link under dashboard_matches/edit_match/-LEpo_IdqBFaS1xKK1wp
            
            firebaseDB.ref(`matches/${matchId}`).once('value')
                .then((snapshot)=>{
                    const match = snapshot.val();
                    // console.log(match); get the information about the match from the firebase server

                    // populate all the info about the match, into the edit match.
                    getTeams(match,'Edit Match');
                    
                })
        }
       
    }
    successForm = (message) =>{
        this.setState({formSuccess:message});
        setTimeout(()=>{
            this.setState({formSuccess:''})
        },2000)
    }

    inputChangeHandler = (event,inputIdentifier) =>{
        // create deep copy of the state
        const updatedFormData = {...this.state.formData};
        // copy of the second tier... we are not changing the element config only the value, so we don't need to clone that deeply
        const updatedFormElement = {...updatedFormData[inputIdentifier]};
        updatedFormElement.value = event.target.value;
        // update the second tier
        updatedFormData[inputIdentifier] = updatedFormElement;
        //update the state
        this.setState({formData:updatedFormData});

    }

    formSubmitHandler = (e) =>{
        e.preventDefault();
        console.log('form was submitted');
        let dataToSubmit = {};
        let formIsValid = {};

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
            formIsValid = this.state.formData[key].valid && formIsValid;
        }

        this.state.teams.forEach((team,i)=>{

            // for the local team
            if(team.shortName === dataToSubmit.local){
                // create a new dataToSubmit field
                dataToSubmit['localThmb'] = team.thmb;
            }
            // for the away team
            if(team.shortName === dataToSubmit.away){
                dataToSubmit['awayThmb'] = team.thmb;
            }

        })

        if(formIsValid){
            //console.log('dataToSubmit',dataToSubmit);
            // Do we want to EDIT the match or ADD the match.
            if(this.state.formType === 'Edit Match'){
                // updating the database in firebase
                firebaseDB.ref(`matches/${this.state.matchId}`)
                    .update(dataToSubmit)
                    .then(()=>{
                        console.log('updated firebase')
                        this.successForm('Match has been correctly updated!');
                    })
                    .catch((err)=>{
                        console.log('err',err)
                    })
            }
            else{
                firebaseMatches.push({dataToSubmit})
                    .then(()=>{
                        this.props.history.push('/matches');
                    })
            }
        }
        else{
            this.setState({formError:true});
        }

        console.log(dataToSubmit);
    }

    render() {
        const formElementArray = [];
        for(let key in this.state.formData){
            formElementArray.push({
                id: key,
                config:this.state.formData[key]
            })
        }
    
        let form = (
            <form onSubmit = {this.formSubmitHandler}>
                {
                    formElementArray.map((el)=>{
                        console.log(el.config);
                        return (
                            <div key = {el.id}>
                                <div style = {{fontWeight: '600'}}>
                                    {el.config.config.label}
                                </div>
                                <Input
                                        elementType = {el.config.elementType}
                                        elementConfig = {el.config.elementConfig}
                                        value = {el.config.value}
                                        changed = {(event)=>this.inputChangeHandler(event,el.id)}
                                    />
                             </div>
                        )
                    })
                }
                <Button btnType = "Green">Yes, {this.state.formType}</Button>
            </form>
        )
        return (
            <DashboardLayout>
                     <h4> {this.state.formType} Dashboard </h4>
                  <div className = {classes.DashboardMatches}>
                        {form}
                  </div>
          

            </DashboardLayout>
           
        );
    }
}

export default DashboardMatches;