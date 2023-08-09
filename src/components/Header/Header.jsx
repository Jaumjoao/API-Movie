export const Header = (props) =>{
    const handleSubmit = (event) => {
        event.preventDefault();
        const searchValue = event.target[0].value;
        props.onSubmit(searchValue);

        event.target[0].value = '';
    }

    return (
        <header className="Header">
            <h1>Movie List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Pesquise por filmes"/>
            </form>
        </header>
    );
}