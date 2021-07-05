import { Article } from '../types/article';

export const fakeArticles: Article[] = [
    {
        id: '1523543645756856',
        url: 'fake-news',
        title: 'Fake news',
        content: '<p>Fake news is a problem. It is a <strong>Big Data problem</strong>. We are trying to solve it with small amounts of data.</p> <p>Those are, in a nutshell, the three main points of our paper. We will not retread the familiar territory covered by many recent papers, reports and news media articles regarding how fast fake news spreads; why the presence of fake news is a problem because so many people get their news through online sources; and how the inability to trust news is a problem for democracy. We will only provide brief literature reviews of how each of those aspects has been addressed in recent literature. Our focus is on providing technological solutions to a problem that has been not necessarily created, but certainly exacerbated, by technology. We provide a comprehensive account of fake news detection as a text classification problem, to be solved using natural language processing tools, and show that, in our experiments with two general classes of algorithms, fake news articles are detectable, especially given enough training data. And this need for data leads to our call to arms to the research community, to news media and social media companies: We want your fake news data.</p>',
        publicationDate: '05/02/2021'   
    },
    {
        id: '436457567452353446',
        url: 'john-kennedy',
        title: 'John F. Kennedy',
        content: '<p><strong>John F. Kennedy</strong> was the 35th President of the United States <i>(1961-1963)</i>, the youngest man elected to the office. On November 22, 1963, when he was hardly past his first thousand days in office, JFK was assassinated in Dallas, Texas, becoming also the youngest President to die.</p>',
        publicationDate: '06/10/2021'   
    },
    {
        id: '346735809785324235',
        url: 'covid-19-vaccines',
        title: 'COVID-19 vaccines',
        content: '<p>Equitable access to safe and effective vaccines is critical to ending the COVID-19 pandemic, so it is hugely encouraging to see so many vaccines proving and going into development. WHO is working tirelessly with partners to develop, manufacture and deploy safe and effective vaccines.</p> <p>Safe and effective vaccines are a game-changing tool: but for the foreseeable future we must continue wearing masks, cleaning our hands, ensuring good ventilation indoors, physically distancing and avoiding crowds.</p>',
        publicationDate: '06/13/2021'   
    }
]