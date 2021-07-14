import Select from 'react-select';
import '../css/RegisterSelect.css';


const options = [
    { label: 'Javascript', value: 'javascript' },
    { label: 'JAVA', value: 'java' }, 
    { label: 'Dzintars', value: 'dzintars' }, 
]





function RegisterSelect(styles) {


    return (
        <div style={styles.app}>
        
            <Select
             options={options}  className="select-field" placeholder="Select your favorite programming language *"
            
            />
        </div>
    )
}


export default RegisterSelect;





