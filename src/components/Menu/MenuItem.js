import Button from "../Button";

function MenuItem({data}) {
    return ( 
        <Button to={data.to}><span className="menuIcon">{data.icon}</span> {data.title}</Button>
     );
}

export default MenuItem;