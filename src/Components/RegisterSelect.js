import Select from 'react-select';
import '../css/RegisterSelect.css';


const options = [
    { label: 'MARS', value: 'mars' }, 
    { label: 'JUPITER', value: 'jupiter' }, 
    { label: 'SATURN', value: 'saturn' },
    { label: 'VENUS', value: 'venus' }, 
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







