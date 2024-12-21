//dynamic
export const getData =async<T>(url:string):Promise<T>=>{
    const fetchData=await fetch(url)
    const res=await fetchData.json()
    return res
}
