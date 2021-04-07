import { useRouter } from 'next/router'

const User = () => {
    const router = useRouter();
    return ( 
        <div>
            <h4><h1>{router.query.name}</h1>by {router.query.quote}</h4>
        </div>
     );
}
 
export default User;