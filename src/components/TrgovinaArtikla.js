    import React from 'react'
    import Artikli from '../jsons/artikl.json';

    function TrgovinaArtikla(props) {
      return (
        <>
            <tr>
                  <td scope='row'>{props.artikl.Id}</td>
                  <td>{props.artikl.Naziv}</td>
                  <td>{props.artikl.Proizvodac}</td>
                  <td>{props.artikl.Model}</td>
                  <td>{props.artikl.Cijena}</td>
                  <td>{(props.artikl.Kolicina > 0) ? <KosaricaArtikl kolicina={props.artikl.Kolicina}/> : <UpitArtikla kolicina={props.artikl.Kolicina}/>}</td>
              </tr>
        </>
      )
    }

    function UpitArtikla(props)
    {
        return(
            <button className='btn btn-primary' onClick={PrikaziUpit}>Posalji upit</button>
        )
    }

    function PrikaziUpit()
    {

        alert("Artikl nije dostupan");
    }

    function KosaricaArtikl(props)
    {
        return(
            <button className='btn btn-success' onClick={ () => PrikaziDostupne(props.kolicina)}>Kosarica</button>
        )
    }

    function PrikaziDostupne(kolicina)
    {
        alert("Dostupno je: " + kolicina)
    }
    
    export default TrgovinaArtikla
    