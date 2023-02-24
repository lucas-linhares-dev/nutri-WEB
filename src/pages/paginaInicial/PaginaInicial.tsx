


export const PaginaInicial = () => {

    const cardStyle = {
        width: "50%",
        margin: "auto",
        marginTop: "5rem"
    }

    const logoTitleStyle = {
        color: "green",
        fontSize: '30px'
    }


    const titleStyle = {
        textAlign: 'center' as 'center'
    }


    return(
        <div>
            <div className="card" style={cardStyle}>
                <div className="card-header">
                    <h3 className="card-title" style={titleStyle}>Seja bem vindo ao projeto <span style={logoTitleStyle}>Nutri+</span></h3>
                </div>
            </div>


        </div>
    )
}