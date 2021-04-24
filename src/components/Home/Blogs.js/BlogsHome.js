
import "./BlogsHome.css";

import Artical1 from "../../../Assets/Images/Articles/A1.jpg";
import Artical2 from "../../../Assets/Images/Articles/A2.jpg";
import Artical3 from "../../../Assets/Images/Articles/A3.jpg";
import Blog from "../../Blogs/BlogDetails/BlogDetails";
import { useHistory } from "react-router";
import {Button} from 'reactstrap';


const BlogsHome = (props) => {
  const history = useHistory();
  const handleSubmit=()=>{
    history.push("/blogs");
  }
  const articles = [
    {
      id: 1,
      title: "HOW TO CULTIVATE MINDFULNESS PRACTICE IN DAILY LIFE",
      secondTitle:"HOW TO CULTIVATE MINDFULNESS PRACTICE IN DAILY routine and why is it important",
      description:
        "practising the art of mindfulness trains your mind to stay alert and live in the moment. You may have noticed that our happiest memories are of the time when we are living in the moment. All our cherished memories comprise of talking to a loved one, being on a vacation and so on.Is living in the moment really this great? Based on recent researches, the answer is yes. Being mindful is about experiencing each moment in all its vividness without letting thoughts and other distractions clouding the experience. Mindfulness at home: Boosts health and immune system Mindfulness has changed and improved the lives of millions of individuals all over the world. In a 2013 study, it was reported that mindfulness meditation has beneficial effects on individuals who have anxiety and helped reduce stress reactivity in people with an anxiety disorder. Introducing mindfulness to your daily routine isn’t difficult. You don’t need to have an hourlong meditation session to feel the positive effects of meditation. Even 2 minutes are enough.- Try to be mindful while doing the everyday task as ordinary as walking from one room to another. Make it a habit to count your steps, observe your surroundings and just focus on what you are feeling. - Similarly, be mindful while eating by focusing on your every bite instead of just going through the motion of eating.",
 
      image: Artical1,
      paragraph:
        "Mindfulness at work: Boosts creativity and problem-solving skills In a Gallup Survey “How Millennials Want to Work and Live” only 29% of millennials felt engaged at work. These figures are troubling because millennials make up 40% of the current US workforce will be 75% of the workforce by 2025 and if effective measures are not taken soon, it will affect the organizational efficiency in future. Companies including Aetna, Google have been offering mindfulness-based programs to their workforce. Google, since 2007, has been offering its popular 7-week training course called “Search Inside Yourself. The training consists of three parts: attention training, self-mastery, and creating mental habits. The participants learn how to better relate to themselves and to others. Positive changes in behaviour like improved self-knowledge as well as the ability to listen to others have been reported. Mindfulness is known to enhance creativity and problem-solving skills. In a 2011 study, it was found that students who meditated during the break were able to solve more problems after the break as compared to students who didn’t practice meditation. Practicing mindfulness at work helps you be a more efficient worker and enjoy the tasks as you perform them. - Focus on the task at hand. This will allow you to finish tasks quickly – thus helping you be more productive.- Perhaps you get stressed easily or maybe you are prone to procrastinate a lot? We engage in poor work habits without even realizing and here mindfulness will help you. Be more mindful of your responses to various situations and challenges during the work to alter them for the better. Whatever your bad habits may be, once you become mindful of them, you will be more likely to quit them.To conclude,Living mindfully is a choice. A choice you can make to live a deeply enriched and fulfilling life. It helps you stay rooted at the moment, prevent your thoughts from wandering and allows you to enjoy the perks of health, productivity and most importantly the joy of experiencing the moment. ",
    },
    {
      id: 2,
      title: "HOW TO DEAL WITH GRIEF WHILE BATTLING DEPRESSION",
      secondTitle:"Losing someone we love can be devastating. Grief is such a powerful emotional state, and w…",
      description:
        "Grief can occur for reasons other than a loved one’s passing. Other types of loss include loss of a job, the end of a marriage or significant relationship, or the loss of physical health. All of these types of loss also spark the powerful emotions associated with grieving. While the grief journey is unique to each of us, there are some added risks for some. Someone who is already dealing with diagnosed depression will be vulnerable to the added depths of these fresh emotions. For this reason, it is imperative that someone in this position access the professional mental health support that can be so beneficial at a time like this. ",
      image: Artical2,
      paragraph:"About Grief How loss affects each of us can be very different. Many variables factor into how we will manage the resulting emotions. The length of time that it takes to work through a loss will be different for everyone. No one should pressure someone in mourning to “get over it already. Some of the ways that grief can affect us are as follows: Our behaviours: A change in eating habits: Loss of appetite or eating more than usual,Avoidance behaviours, Anger or aggression,Withdrawing socially, Self-medicating with substances, Trouble making decisions, Our mental health:Sadness, Mood swings,Irritability, Guilt, Anger, Feelings of failure,Trouble concentrating"
    },
    {
      id: 3,
      title: "NEW YEAR: NEW THINKING",
      secondTitle:"With the New Year under way, it is time reflect on how you think and feel about yourself, others and li…",
      description:
        "one of the key skills of a psychotherapist is being able to foster a relationship where patients can be curious about their internal world, i.e. how they think and feel about themselves and others, both in the past and in the present. I sometimes use the analogy of developing one’s internal radar system in order to detect one’s thoughts and feelings. In discussing this idea with one patient she was reminded of trying to catch butterflies with a net as a child. I thought this was a lovely metaphor to describe the transformation process of therapy. For example, the butterfly is associated with the symbolism of change and transformation. The more butterfly thoughts and feelings we can catch and let unfold the deeper the transformation of both the patient and therapist.",
      image: Artical3,
      paragraph:"Why do some people struggle to catch their butterfly thoughts? There is an unconscious process at play. For some patients, their thoughts and feelings do not contain the potential for transformation. They contain the seeds of an unthinkable pain, which has to be attacked, controlled and defended against at all costs. For example, a patient may be afraid to think because they then have to do something about it. For others, the mating of thoughts increases the possibility of feeling out of control and needy, whilst also having to engage with painful feelings and realisations such as loss and guilt. Whilst also recognising that one has destructive feelings (envy, jealousy, hate) towards others and life."
    },
  ];
  return (
    <>
    <div className="row justify-content-center align-items-center mx-0">
    {articles.map((article) => {
          return (
              <div className="w-100 mx-4 p-0 col-md-3 col-xs-8 blogs-card  " key={article.id}>
                <Blog
                  title={article.title}
                  description={article.description}
                  image={article.image}
                  secondTitle={article.secondTitle}
                  paragraph={article.paragraph}
                />
              </div>
          );
        })}
        </div>
        <div className="row justify-content-center align-items-center mt-5 mx-0">
          <div className="col-md-3 col-xs-6">
            <Button  color="primary" className=" bg-primary  btn-blogs my-2  text-uppercase mx-4 "onClick={handleSubmit}>see more</Button>
          </div>
        </div>
    </>
  );
};

export default BlogsHome;
