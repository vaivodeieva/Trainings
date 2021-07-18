import Select from 'react-select';
import '../css/RegisterSelect.css';


const options = [
    { label: 'MARS', value: 'mars' }, 
    { label: 'VENUS', value: 'venus' }, 
    { label: 'SATURN', value: 'saturn' },
]


function RegisterSelect() {


    return (
        <div >
        {/* <FormControl> */}
            <Select 
             options={options}  className="select-field" placeholder="SELECT THE PLANET YOU WANT TO TRAVEL TO "

             
            />
            {/* </FormControl> */}
        </div>
    )
}


export default RegisterSelect;







