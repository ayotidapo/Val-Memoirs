import React from 'react'
import './input.scss'
const InputFields = ({ field, onChange }) => {
    let input = null
    switch (field.type) {
        case 'text':
            input = (
                <div>
                    <label>{field.title}</label>
                    <input
                        type={field.type}
                        name={field.name}
                        value={field.value}
                        onChange={e => onChange(e.target.name, e.target.value)}
                    />
                </div>
            )
            break;
        case 'radio':
            input = (
                field.choices.map((choice, key) =>
                    <input
                        type={field.type}
                        name={field.name}
                        checked={field.checked}
                        onChange={e => onChange(e.target.name, e.target.checked)}
                    />

                )

            )
            break;
        case 'textarea':
            input = (
                <textarea
                    rows={field.row}
                    className="txt_a"
                    placeholder={field.title}
                    name={field.name}
                    value={field.value}
                    onChange={e => onChange(e.target.name, e.target.value)}
                />

            )
            break;
        default:
            input = null
    }



    return <div className="Ipt">{input}</div>
}


export default InputFields
