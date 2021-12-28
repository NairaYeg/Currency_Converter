
import { useEffect } from 'react'
export function Input({ name, placeholder, value, handleChange, type, ...props }) {
    useEffect(() => {
        props.inputRef && (props.inputRef.current.focus())
    }, [])

    console.log(props.inputRef);

    return <div style={{ margin: '10px' }}>
        {/* <h4 ref={props.inputRef}></h4> */}
        <input
            ref={props.inputRef}
            type={type || 'text'}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e.target.value, name)} />
    </div>
}