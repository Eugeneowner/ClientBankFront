import Article from "../components/assets/article/article";

const title = `Personal Bank: Your Trusted Financial Partner`

const text = ` 
Personal Bank is a premier financial institution dedicated 
to providing top-notch banking services to individuals and families. 
Founded in 1920, Personal Bank has grown steadily over the years, earning a 
reputation for reliability, innovation, and exceptional customer service.
`;

const AboutUs = () => {
  return (
    <section>
      <Article title={title} text={text} />
    </section>
  );
};

export default AboutUs;
