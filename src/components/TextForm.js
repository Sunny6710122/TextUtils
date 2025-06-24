import React, {useState} from 'react';
import Alert from './Alert';
// import About from './About';
// import Navbar from './Navbar';


export default function TextForm(props) {

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
    

    const HandleClick = (event)=>{
        event.preventDefault();
        console.log("On clicked");
        setText(Text.toUpperCase());
        Alerting("Text Changed to Upper Case", "Success");
    }

    const HandleClick1 = (event)=>{
        event.preventDefault();
        console.log("On clicked");
        setText(Text.toLowerCase());
        Alerting("Text Changed to Upper Case", "Success");
    }


    const HandleonChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const wordCounter = (msg) =>{
        let counter = 1;
        if(msg.length==0)
        {
            return 0;
        }
        for (let i = 0; i < msg.length; i++) {
            if(msg[i]==" " && msg[i+1] !=" ")
            {
                if(i==msg.length-1)
                {
                    continue;
                }
                counter += 1;
            }
            if(msg[i]=="\n" && (msg[i+1] !="\n" && msg[i+1] !=" "))
            {
                if(i==msg.length-1)
                {
                    continue;
                }
                counter += 1;
            }
            
        }
        return counter
    }

    
    const [Text, setText] = useState("");
    return (
        <>
            {/* <Navbar /> */}
            <Alert alertt={alert}/> 
            <div className='container'>
                <h1>{props.heading}</h1>
                <form>
                    <div className="form-group">
                        <textarea className="form-control" placeholder='Enter the text' value={Text} onChange={HandleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                        <button type="button mx-2 my-2" onClick={HandleClick} className="btn btn-primary">Convert to Uppercase</button>
                        <button type="button mx-2 my-2" onClick={HandleClick1} className="btn btn-primary">Convert to Lowercase</button>
                    </div>
                </form>
            </div>
            <div className='container'>
                <h2>Your text Summary</h2>
                <p>{wordCounter(Text)} words {Text.length} characters</p>
            </div>
        </>
    )
}



// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     homename: PropTypes.string
//   }
  
//   Navbar.defaultProps = {
//     title: "Set the title",
//     homename: "Homeee"
//   };

