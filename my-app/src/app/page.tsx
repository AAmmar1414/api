
import {getData} from "./service"

interface Book{
  id:number
  name:string

}

export default async function Home() {

 // const fetchData=await fetch('https://simple-books-api.glitch.me/books')
  //const res=await fetchData.json()
//console.log("books",res)


 const data =await getData<Book[]>("https://simple-books-api.glitch.me/books")

//   console.log("books",data)

  const book=await getData<Book[]>("https://simple-books-api.glitch.me/books/4")

  console.log("book:",book)


  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-lg" >
      <h1 className="text-[38px]">api</h1>
      <br/>
      <p className="text-[40px]">
        am appp is delay min koi nhi
      </p>
      <br/>

      <ol>
        {
          data.map((obj,i)=>{
            return(
             <li key={i}>{obj.name}</li>
            )
          })
        }
      </ol>
      {
        // JSON.stringify(book)
          <h2>{book.name}book</h2>

       }

    </main>
  );
}
