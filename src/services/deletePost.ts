const deletePost = async (id: number): Promise<void>  => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    
    try {
      const response = await fetch(url, {
        method: 'DELETE'
      });
  
      if (!response.ok) {
        throw new Error(` Was a problem deleting the post with the id ${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  } 


  export default deletePost