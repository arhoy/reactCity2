import React , {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import {firebaseMatches} from '../../../resources/firebase';
import {firebaseLooper, reverseArray} from '../../../components/UI/Util/Helpers';
import {Link} from 'react-router-dom';
import classes from './DashboardTable.css';
import { forEach } from '@firebase/util';


class DashboardTable extends Component {
    state = {
        isLoading: true,
        matches:[]
    }
    componentDidMount(){
        firebaseMatches.once('value')
            .then((snapshot)=>{
                const matches = firebaseLooper(snapshot);
                this.setState({matches: reverseArray(matches),isLoading:false});
            })
    }

    render() {
        console.log(this.state.matches);
        
      
        return (
            <div className = {classes.DashboardTable}>

                   
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Match</TableCell>
                                        <TableCell>Final</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                    this.state.matches ? 
                                        this.state.matches.map((match,i)=>(
                                            <TableRow key = {i}>
                                                 <TableCell>{match.date}</TableCell>
                                                 <TableCell> 
                                                    <Link to = {`/dashboard_matches/edit_match/${match.id}`}> 
                                                        <div className = {classes.MatchSummary}>
                                                                <div className = {classes.MatchSpec}>
                                                                    <div>
                                                                        { match.resultLocal < match.resultAway ?  <span style ={{fontWeight:600}}>{match.away}</span> : <span>{match.away}</span>   }
                                                                    </div>
                                                                    <div>
                                                                    { match.resultLocal < match.resultAway ?  <span style ={{fontWeight:600}}>{match.resultAway}</span> : <span>{match.resultAway}</span>   }
                                                                    </div>
                                                                </div>
                                                                <div className = {classes.MatchSpec}>
                                                                    <div>
                                                                    { match.resultLocal > match.resultAway ?  <span style ={{fontWeight:600}}>{match.local}</span> : <span>{match.local}</span>   }
                                                                    </div>
                                                                    <div>
                                                                    { match.resultLocal > match.resultAway ?  <span style ={{fontWeight:600}}>{match.resultLocal}</span> : <span>{match.resultLocal}</span>   }
                                                                    </div>
                                                                </div>
                                                              
                                                             
                                                        </div>
                                                        
                                                    </Link>
                                                </TableCell>
                                        
                                                 <TableCell> {match.final === "Yes" ? <span style = {{color:'green'}}>Final</span>: <span style = {{color:'red'}}>Not Played</span> }</TableCell>

                                            </TableRow>
                                            
                                        ))
                                        :
                                        null
                                 }

                                </TableBody>
                            </Table>
                        </Paper>
                  

                    {
                        this.state.isLoading ? 
                        <div style = {{display:'flex',justifyContent:'center', marginTop: '5rem'}}>
                            <CircularProgress thickness = {7} style ={{color:'orange'}}/> 
                        </div>
                       : 
                        null
                    }
                   
            </div>
        );
    }
}

export default DashboardTable;