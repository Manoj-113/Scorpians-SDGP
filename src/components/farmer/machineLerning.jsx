import React, {Component} from "react";
import axios from "axios";



class machineLerning extends Component {
    state = {predictedvalue:0,vegetale:'', time:''};
    
    render() {
        const getPredictedValue = async () => {
           // this.setState({predictedvalue:100.1})
            setTimeout(
                () => this.setState({ predictedvalue: 100.1 }), 
                3000
              );
              
            try {
                console.log('predict')
              const response = await axios.get('http://127.0.0.1:5000/predict',{headers: {"Access-Control-Allow-Origin": "*"}}
              )
              console.log(response)
            } catch (error) {
              console.log(error)
            }
          }
        
        return (
            <div style={{height: "81vh"}}>
                <h2 className="ml-3 mb-2">AgroX</h2>
                <h3 className="ml-3 mb-2">Real Time Price Prediction</h3>
                <section className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <input
                                   value={this.state.vegetale}
                                   onChange={(e)=>this.setState({vegetale:e.target.value})}
                                    type="text"
                                    className="ml-2 w-50 p-1"
                                    id="vegitableId"
                                    placeholder="Enter Vegitable Type"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    value={this.state.time}
                                    onChange={(e)=>this.setState({time:e.target.value})}
                                    type="text"
                                    className="ml-2 w-50 p-1"
                                    id="time"
                                    placeholder="Time"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                < button onClick = {() => getPredictedValue()} className="btn btn-primary m-2" type="button" disabled={!this.state.vegetale || !this.state.time }>
                                    Predict Price
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div
                            className="card card-outline border-light mb-3"
                            style={{maxWidth: "18rem"}}
                        >
                            <div className="card-body">
                                <h5 className="card-title mb-2 font-weight-bold">
                                    Successfully Predicted...
                                </h5>
                                <br/>
                                <label>Predict Price : </label>
                                <span
                                    className="badge p-2 m-2 badge-primary "
                                    style={{fontSize: 18}}
                                >
                           {this.state.predictedvalue.toString()+' price per kg' }
                        </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default machineLerning;
