import { query } from "@angular/animations";

interface options {
    name: string, 
    query: (query: string) => string,
    children?: options[] 
}

const site = (url: string) => `site:${url}`;
const option = (name: string, url: string | string[]) => 
        ({name, query: (query: string) => (Array.isArray(url) ? url.map(u => site(u)).join(' | '): site(url)) + ` ${query}`});

export const options: options[] = [
    {
        name: "Obsidian Notes",
        query: query => `inurl:publish.obsidian.md/* "${query}"`
    },
    {
        name: 'Notion handbook',
        query: (query) => `site:*.notion.site/* "Handbook" ${query}`
    },
    {
        name: 'Google Drive',
        query: (query) => `site:drive.google.com ${query}`
    },
    {
        name:  "Job Search",
        query(query) {
            return (this.children?.map(c => c.query('')).join(' | ') + ' ' + query) as string;
        },
        children: [
            option('jooble', 'jooble.org'),
            option('lever', 'lever.co'),
            option('greenhouse', ['greenhouse.io', 'greenhouse.com']),
            option('join', 'join.com/*/*'),
            option('personio', 'personio.com'),
            option('ashbyhq', 'jobs.ashbyhq.com/*'),
            option('turbohire', '*.turbohire.co'),
            option('workable', 'apply.workable.com/*'),
            option('jointaro jobs', 'www.jointaro.com/jobs/*/*'),
            option('applytojob', '*.applytojob.com/apply'),
            {name: 'page which us indeed widget', query: query => `"Apply with indeed" ${query}`},
            option('traffit', '*.traffit.com/public/an/*'),
            option('teamtailor', '*.teamtailor.com/jobs/*'),
            option('euremotejobs', 'euremotejobs.com/job/*'),
            option('flexa careers', 'flexa.careers/jobs/*'),
            option('zoho recruit','*.zohorecruit.com/jobs/Careers/*/'),
            option('bamboohr', '*.bamboohr.com/careers/*'),
            option('pinpointhq', '*.pinpointhq.com/en/postings/*'),
            option('recruitee', '*.recruitee.com'),
            {name: 'myworkdayjobs', query: query => `myworkdayjobs ${query}`},
        ]
    }
];








// ----
export const others = [
    {url: 'https://filepursuit.com/'},
    {url: 'http://palined.com/search/'},
    {url: 'https://odcrawler.xyz/'},
    {url: 'https://github.com/Tobee1406/Awesome-Google-Dorks?tab=readme-ov-file'}
]