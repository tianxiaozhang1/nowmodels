import ana1 from './models/women/ana/1.jpg'
import constance1 from './models/women/constance/1.jpg'
import camila1 from './models/women/camila//1.jpg'
import delia1 from './models/women/delia/1.jpg'
import georgia1 from './models/women/georgia/1.jpg'
import jaclyn1 from './models/women/jaclyn/1.jpg'
import lauren1 from './models/women/lauren/1.jpg'
import nina1 from './models/women/nina/1.jpg'
import oksana1 from './models/women/oksana/1.jpg'
import sara1 from './models/women/sara/1.jpg'
import tina1 from './models/women/tina/1.jpg'
import zoey1 from './models/women/zoey/1.jpg'

export const photos = [
    {name: "ana", fullName: "ana jovic", id: 0, profileImage: ana1},    
    {name: "camila", fullName: "camila hernandez", id: 1, profileImage: camila1},
    {name: "constance", fullName: "constance singh", id: 2, profileImage: constance1},
    {name: "delia", fullName: "delia fernandes", id: 3, profileImage: delia1},
    {name: "georgia", fullName: "georgia zinchenko", id: 4, profileImage: georgia1},
    {name: "jaclyn", fullName: "jaclyn gobert", id: 5, profileImage: jaclyn1},
    {name: "lauren", fullName: "lauren howe", id: 6, profileImage: lauren1},
    {name: "nina", fullName: "nina hyseni", id: 7, profileImage: nina1},
    {name: "oksana", fullName: "oksana kravitz", id: 8, profileImage: oksana1},
    {name: "sara", fullName: "sara noranho", id: 9, profileImage: sara1},
    {name: "tina", fullName: "tina wang", id: 10, profileImage: tina1},
    {name: "zoey", fullName: "zoey lee", id: 11, profileImage: zoey1},
]

export const models = [
    {name: "ana", fullName: "ana suka"},
    {name: "constance", fullName: "constance noranho"},
]

export const importAll = (context) => context.keys().map((key) => context(key).default);

export const allPhotos = importAll(require.context(`./models/women/`, true, /\.(?:jpg|jpeg|)$/));
