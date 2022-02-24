import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from 'next/head';

export default function NewMeetUpPage(){
    const router = useRouter();
    async function addMeetupHandler(enteredMeetupData){
      const response = await fetch('/api/new-meetup',{
          method:'POST',
          body:JSON.stringify(enteredMeetupData),
          headers:{
              'Content-Type':'application/json'
          }
      });

      const data = await response.json();
      console.log(data);
      router.push('/');
    }
return<>
    <Head>
        <title>Add a New Meetup</title>
        <meta name="description"
        content="Add Your own meetups and create amzaing networking ops"></meta>
      </Head>
 <NewMeetupForm onAddMeetup={addMeetupHandler}/>
 </>

}