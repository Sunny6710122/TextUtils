import React, { useState } from 'react';
import Alert from './Alert';
export default function About() {
    const [mystyle, setMysytle] = useState({
        color: 'black',
        background: 'white'
    });

    const [alert, setAlert] = useState(null);

    const Alerting = (message, typ) => {
        setAlert({
          msg: message,
          type: typ
        });
        setTimeout(() => {
            setAlert(null)
        }, 2000);
      }

    const [btn, setBtn] = useState("Enable Dark Mode");

    const ModeChange = () => {
        if(btn==="Enable Dark Mode")
        {
            setMysytle({
                color: 'white',
                background: 'black'
            });
            setBtn("Enable White Mode");
            Alerting("Dark Mode Enabled", "Success");
        }
        else
        {
            setMysytle({
                color: 'black',
                background: 'white'
            })
            setBtn("Enable Dark Mode");
            Alerting("White Mode Enabled", "Success");
        }
    }

  return (
    <> 
    <Alert alertt={alert}/> 
    <div className='container'>
        <h1 className='mx-2 my-2' >About US</h1>
      <div id="accordion" style={mystyle}>
        <div className="card" style={mystyle}>
            <div className="card-header" id="headingOne" >
            <h5 className="mb-0" >
                <button className="btn btn-link" style={mystyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #1
                </button>
            </h5>
            </div>

            <div id="collapseOne" style={mystyle} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body" style={mystyle}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
        </div>
        <div className="card" style={mystyle}>
            <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
                <button className="btn btn-link collapsed" style={mystyle} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Collapsible Group Item #2
                </button>
            </h5>
            </div>
            <div id="collapseTwo" style={mystyle} className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body" style={mystyle}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
        </div>
        <div className="card" style={mystyle}>
            <div className="card-header" id="headingThree" style={mystyle}>
            <h5 className="mb-0">
                <button className="btn btn-link collapsed" style={mystyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Collapsible Group Item #3
                </button>
            </h5>
            </div>
            <div id="collapseThree" className="collapse" style={mystyle} aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body" style={mystyle}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
        </div>
        </div>
        <button type="button" onClick={ModeChange} className="btn btn-primary my-3 mx-2">{btn}</button>
    </div>
    </>
  )
}
