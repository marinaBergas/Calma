import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import './Blogs.css';
import photo from "../../Assets/Images/bg-header.jpg";
import photo2 from "../../Assets/Images/calm.jpg";
import photo3 from "../../Assets/Images/header.jpeg";
import { Container, Row, Col } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import Blog from "./BlogDetails/BlogDetails";
import Artical1 from "../../Assets/Images/Articles/A1.jpg";
import Artical2 from "../../Assets/Images/Articles/A2.jpg";
import Artical3 from "../../Assets/Images/Articles/A3.jpg";
import Artical4 from "../../Assets/Images/Articles/A4.jpg";
import Artical5 from "../../Assets/Images/Articles/A5.jpg";
import Artical6 from "../../Assets/Images/Articles/A6.jpg";
import Artical7 from "../../Assets/Images/Articles/A7.jpg";
import Artical8 from "../../Assets/Images/Articles/A8.jpg";
import Artical9 from "../../Assets/Images/Articles/A9.jpg";
import BlogArticle from "./BlogDetails/BlogArticle";
import { useState } from "react";
import Footer from "../Footer/Footer";
import WebNavbar from "../Navbar/Navbar";



const Blogs = (props) => {
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
    {
      id: 4,
      title: "A MEDITATION ON MEDITATION",
      secondTitle:"This article discusses my rationale for regarding meditation as  the  anchor  for  a mindfulness  practi…",
      description:
        "Meditation is quality control in the manner of a chef’s cooking techniques – consistently practised, it allows a constant quality of “dishes.” It’s the psychological equivalent of a ballet dancer rehearsing movements on the barre or a tennis player volleying before a match to hone the timing and rhythm of her hand-eye coordination. In short, meditation is a daily best practice – a warm-up for self-awareness and self-discipline, leading eventually to being present in an emotionally intelligent manner. We drop anchor in the present moment by slowing and deepening our breathing. It’s about finding the balance between your “self” that experiences and your “self” that observes, or, on a neurophysiological level, the balance between the right and left hemispheres of the brain. Or about finding the balance between the intelligence that lives in your brain and the intelligence that lives distributed throughout your body (psychotherapists often ask patients: “If your stomach could speak right now what tale might it tell?.",
      image: Artical4,
      paragraph:"This presence can help us discover the truth in our intuition, distilled from thoughtful investigations into what we learn from trial and error. Without the best practice of presence born of meditation, the unconscious intuitive false alarms of a traumatized brain are easily tripped by unreliable and invalid innocuous stimuli – our intuition accumulates flaws and may be as random and unpredictable as the fluctuations of the stock market. Presence stretches our knowledge by recognizing and making sense of sometimes minute anomalies in patterned behaviours."
    },
    {
      id: 5,
      title: "HOW TO DEAL WITH A DIFFICULT MOTHER-DAUGHTER RELATIONSHIP",
      secondTitle:"How to deal with a difficult Mother-Daughter relationship",
      description:
        "There is an expectation in society that mothers and adult daughters are meant to have a close, loving relationship. In some families, this is true. Families can be a source of great joy, a place where individuals feel they belong to a larger system and a place of shared history across generations and cultures.Healing can only happen when people are willing to shift.” Iyanla Vanzant For other mothers and daughters, this is not always the case. In my practice, I am seeing women who are hurt, confused and angry about the relationship with their own mothers. Many of these women contact me for counselling, initially to discuss their own daughter’s ‘difficult behaviour’. As we dig deeper, they have a complex relationship with their own mother and they do not wish to repeat this intricate history with their own daughter. As we explore the mother/adult daughter dynamic, the woman experiences conflict of guilt that she feels she is not a loving, caring daughter; of disloyalty towards the bonds of daughter to mother; and grief that she desperately wants a relationship with her mother, yet years of distrust, resentment and disappointment has created a chasm which is difficult to bridge.",
      image: Artical5,
      paragraph:"Mapping a Family When I see a client for the first time I draw a map, like a family tree, called a genogram. I work from a family systems approach and map out three generations of a family, looking for themes and patterns as well as interactions within the family system. In retracing family history there can be specific points in time where a greater degree of conflict occurred between mothers and daughters – when a daughter is a teen, when she moves away, she gets married or has a baby."
    },
    {
      id: 6,
      title: "THINGS YOU NEED TO KNOW ABOUT ANXIETY",
      secondTitle:"The reality of anxiety as an emotion and how anxiety helps us to grow in our lives.",
      description:
        "Living with anxiety can be exhausting, frustrating, and painful. This is the most common, natural, and complex emotion we feel when we are in psychological distress. To manage your anxiety, the first step is to understand this emotion. So what is anxiety? In Urdu, anxiety is called a condition of Iztarab, Baychaini, Ghabrahat. Anxiety is your mind and body’s natural response to stress, fears, uncertainty, unfamiliar situation, or apprehension about what’s to come. When you feel anxiety, you also experience uneasiness or distress feelings. The anxiety experience is different for everyone because personalities, life experiences, thought processes, belief systems, culture, and physiology are different. However, the common expression of anxiety is expressed as an unsettling feeling. Anxiety is an emotion which has emotional experiences and physical sensation. So in an emotional experience, you might feel sad, down, low, distracted, defocused. When you feel physical sensations, you might sweat, you will feel headache, your heart will pound, and you will experience fatigue, etc. Anxiety also acts as a secondary emotion because you experienced anxiety instead of another emotion that is difficult for the person to feel or express. Anxiety can be a cover of hurt, jealousy, disappointment, embarrassment, sadness. Anxiety is a mixture of different emotions and thoughts like fear, anger, sadness, etc., and our thought process causes these feelings. I express my feeling of anxiety as a tangled, colourful thread that has other emotions as well. It represents that I am feeling anxious as a cause of other emotions. When I try to untangle this thread, it has other emotions like confusion, anger, etc., which cause my thought process or fears. Anxiety is also an expression of other emotions. You experience the intensity of other emotions like fear, anger, frustration, confusion, insecurity, sadness through anxiety in your body. So anxiety is usually sparked by other emotions evoked or filled with thoughts, memories, and images that have become subconsciously linked with those emotions. When these emotions and thoughts are tangled, you will feel anxious. It is a cause of problematic or unsettling situations. If you face a challenging or distressful situation in your life, then dealing with that situation can cause you anxiety. Problematic situations mostly bring a lot of stress, mental and physical fatigue, confusion, helplessness, feeling of being stuck, and a combination of these feelings can blur your thoughts, can make your mind clouded. Feeling anxious in this situation is very common because anxiety usually draws your attention towards that bigger problem that might threaten your life, mental and emotional security. In which situations we feel anxious? There are different situations when we feel anxiety, and reasons can be different from person to person. I am highlighting few situations and putting these situations in 4 categories. You feel anxious when you experience fear, danger, threat: Fear of uncertainty, financial insecurity, unknown, failing in life or exams, being alone, height, flying, a threat to life, fear of losing family member and friends, fear of losing support, fear of public speaking, fear of losing a job, etc.",
      image: Artical6,
      paragraph:"General life situations can trigger anxiety: Unstructured life and work, too much work in life, unable to get time for self, missing deadlines, unable to give proper attention to family or home, if a person is experiencing grief, or loss, a trauma in life, accidents, changes in living arrangements, pregnancy or giving birth."
    },
    {
      id: 7,
      title: "A WORD ON ENVIRONMENTAL PSYCHOLOGY",
      secondTitle:"Rethinking our relationship to, and our responsibility to protect the environment.",
      description:
        "Environmental psychology is an interdisciplinary field that focuses on the interplay between individuals and their surroundings. It examines the way in which the natural environment and our built environments shape us as individuals. Let us think about the protection of nature in this context.Protect nature, save the planet - is a familiar slogan that we teach our children. Did we ever think how stupid this idea is? Are we the saviours of our planet? It seems we believe that without us, the planet will be no more.  Nature knows how to protect itself. It never sought the help of human beings, who for nature are a mere creation like any other creature. But we are filled with ego. We think we need to protect nature and save the earth. We continue to teach these words of ego to our children and they forget to live in harmony with nature.We are in a quest to conquer nature. Trying to understand every mystery of nature is not wrong. It is the natural instinct of human beings. But trying to control nature and make profits out of it is a learnt behaviour.",
      image: Artical7,
      paragraph:"We need to relearn what we have learnt. The rules of economics, politics and similar branches need to be rewritten. It is time for us to rethink. Then what should we teach our children? Don't disturb nature, spare the planet. Make them aware of the rhythm of nature through actual contact with nature. Include nature walks, bird watching etc. as a part of school activities. Compensate the harm that we had done towards our mother planet."
    },
    {
      id: 8,
      title: "NAVIGATING MENTAL HEALTH AS A TRANS & NON BINARY PERSON",
      secondTitle:"What it is like when you are trans & and/or non binary and seeking support in the mental health fie…",
      description:
        "In my and my clients’ experience navigating mental health as a trans person, it is unfortunately near impossible to find a mental health professional who creates an affirming environment for therapy.The tone set as early as the mental health professional’s (MHP’s) publicity and intake paperwork is already one of exclusion. For instance, rarely do intake forms have spaces for pronouns to be listed, or when they do this is sometimes requested as “preferred pronouns.” Typically a form asks for “Gender” or “Sex,” sometimes with only the binary possibilities of “male” or “female” listed, sometimes with an option of “other” (who wants to be described as “other”?), sometimes with the options “trans male” and “trans female,” as if people who are trans are not “real” males or females.",
      image: Artical8,
      paragraph:"These examples are all transphobic micro-/macroaggressions. One’s “gender” does not communicate one’s pronouns, and neither does the way a person presents. Instead, MHPs can put a blank for pronouns, and then only use the pronouns listed, not what they decide the client’s pronouns are. MHPs can also think about why they need to ask the client’s gender. And rather than using “name” to refer to “legally assigned name” and “preferred name” to refer to the name the person uses, if it is necessary for MHPs to know information for insurance purposes, for example, the MHP can ask for “legally assigned name” and “legally assigned gender,” in addition to client’s name."
    },
    {
      id: 9,
      title: "SIXTEEN PEARLS IN THE CROWN CORONA",
      secondTitle:"The disease also heals us. We can store and retrieve the pearls of meaning and wisdom from the…",
      description:
        "When something is inevitable in our lives, the most constructive decision is to invest our energy in extracting meaning and benefit from it, rather than resisting it. So I sat down to look for the pearls in that corona that reaches out to our bodies today. The first pearl was there waiting for me in the morning, when I opened the window - the birds sang so loudly and were so many and different - that was truly impressive. I don't know what had affected them – the cleaner air, less urban noise, I took a dose of aesthetic pleasure. I live in the centre of Sofia, my inner yard had never sounded so full and rich.",
      image: Artical9,
      paragraph:"The second obvious pearl is to asses our possessions. For a few days, we were stripped of our daily routine of having, of being able - to hug, to be together, to go and buy what we want, to have fun, to have our daily encounters with art and culture, to travel. Wondering which concert or spectacle to go to. The lack of all this can outline the infinitely large contours of the beautiful picture which until recently we have taken for granted."
    },
  ];

  return (
    <>
    <WebNavbar/>
    <Container fluid={true} className="Blogs-cards-container">
      <Row className="justify-content-center align-items-center my-5">
        {articles.map((article) => {
          return (
              <div className="mx-4 p-0 col-md-3 col-sm-8 blogs-card  " key={article.id}>
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
      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default Blogs;
