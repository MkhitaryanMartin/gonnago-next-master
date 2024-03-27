export async function generateMetadata({params}) {
    return {
      title: params.genre,
    }
    }

function Genre({params}){
    return(
        <div>{params.genre}</div>
    )
}

export default Genre