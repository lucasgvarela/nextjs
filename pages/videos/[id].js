function Video({ data }) {
    return (
      <div>
        <p> { data.time } </p>
        <p> { data.host } </p>
      </div>
    )
  }
  
  export async function getServerSideProps({ req, res }) {
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=59, stale-while-revalidate=59'
    );
  
    let data = {
      time: (new Date()).toString(),
      host: req.headers.host
    }
  
    return { props: { data } }
  }
  
  export default Video