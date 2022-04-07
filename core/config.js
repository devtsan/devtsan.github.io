let siteinfo  = {
    'site': 'wpmyanmar.art.blog',
    'name': 'WordPress Myanmar'
};

let menuitems = [
	{'name':'Home','link':'index.html'},
	{'name':'About','link':'about.html'},
	{'name':'','link':''}
];

let data = `https://public-api.wordpress.com/rest/v1.1/sites/${siteinfo.site}/`;

export {siteinfo, data, menuitems};
