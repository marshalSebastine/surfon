import './TextField.css'

const TextField = ({type,name,id,required,label}) => {
    return (
        <div className="form__group">
            <input type={type} className="form__field" 
                    placeholder={label} name={name} id={id}
                     required={required} />
            <label className="form__label">{label}</label>
        </div>
    )
}

export default TextField