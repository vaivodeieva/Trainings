import Select from 'react-select';
import registerSelect from '../css/RegisterSelect.css';


const options = [
    { label: 'React', value: 'react' },
    { label: 'React-Native', value: 'react-native' },
    { label: 'React JS', value: 'react js' },
   
]


function RegisterSlect() {


    return (
        <div>

            <Select
             options={options} className="select-field"
            />
        </div>
    )
}


export default RegisterSlect;





