

export const KontaktuaAdmin = ({mezuak}) => {
    console.log(mezuak);
    return (
        <div>
           <table>
            <tr>
                <td><h1>Bezeroen mezuak</h1></td>
            </tr>
                {
                    mezuak.map((mezua, index) => (
                    <tr><td key={index}><p>{mezua.email}</p><p>{mezua.message}</p></td></tr>
                    
                ))}
           
           </table>

        </div>    
    )
}