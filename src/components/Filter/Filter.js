import css from './Filtter.module.css'

export const Filter = ({ value, onChange }) => {
    return (
        <>
        <label>
        Find contacts by name
        <input className={css.inp} type="text" value={value} onChange={onChange} />
        </label>
        </>
    )
}