import Select from 'react-select';
import '../css/RegisterSelect.css';


const options = [
    { label: 'Javascript', value: 'javascript' },
    { label: 'JAVA', value: 'java' }, 
]

// const customStyles = {
//     control: base => ({
//       ...base,
//       height: 15,
//       minHeight: 15
//     })
//   };


function RegisterSlect() {


    return (
        <div>

            <Select
             options={options} className="select-field" placeholder="Select your favorite programming language *" 
            />
        </div>
    )
}


export default RegisterSlect;





