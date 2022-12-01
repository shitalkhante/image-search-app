

export const Bookmark =(props)=>{
   
    return(
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap", gap:"10px", padding:"10px"}}>
            {props.bookmark.map((d)=>{
                return(<div style={{width:"150px",height:"200px", border:"1px solid black"}}>
                    <img src={d} alt="img" style={{width:"100%", height:"100%"}}/>
                    </div>)
            })}
        </div>
    )
}