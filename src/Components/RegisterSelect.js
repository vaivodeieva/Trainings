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
        {/* <FormControl> */}
            <Select 
             options={options}  className="select-field" placeholder="Select your favorite programming language *"

             
            />
            {/* </FormControl> */}
        </div>
    )
}


export default RegisterSelect;







