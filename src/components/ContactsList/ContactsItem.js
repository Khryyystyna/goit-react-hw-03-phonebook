import css from './Contacts.module.css'

export const ContactsItem = ({ contacts, onDelete }) => {
    return (
        <>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={css.item}>
                    {name}:{number}
                    <button className={css.btn} type='submit'
                    onClick={() => { onDelete(id) }}>Delete</button>
                </li>
            ))}
            </>
        )}