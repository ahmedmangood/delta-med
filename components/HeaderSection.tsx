function HeaderSection({ title }: { title: string }) {
  return (
    <section className="h-[400px] relative">
      <div className="absolute w-full h-full bg-[url('/webimages/about.jpg')] bg-no-repeat bg-cover bg-center brightness-50 grayscale-[40%]"></div>
      <div
        data-aos="fade-up"
        className="px-4 md:px-8 lg:px-12 w-full text-white text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <h2 className="font-bold text-2xl md:text-4xl mb-5">{title}</h2>
      </div>
    </section>
  );
}

export default HeaderSection;
