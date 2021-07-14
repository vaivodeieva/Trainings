import Select from 'react-select';
import '../css/RegisterSelect.css';


const options = [
    { label: 'JAVA', value: 'java' }, 
    { label: 'Dzintars', value: 'dzintars' }, 
    { label: 'Javascript', value: 'javascript' },
    { label: 'PHP', value: 'php' }, 
]


function RegisterSelect() {


    return (
        <div >
        
            <Select 
             options={options}  className="select-field" required placeholder="Select your favorite programming language *"

             
            />
        </div>
    )
}


export default RegisterSelect;





