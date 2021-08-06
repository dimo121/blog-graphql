import moment from 'moment';

export default[{
    id: '1',
    title: 'Blog 1',
    content: "this is the testing content",
    createdAt: moment(0).subtract(2, 'days').valueOf(),
    entries: 0
}, {
    id: '2',
    title: 'Blog 2',
    content: "this is the testing content 2",
    createdAt: moment(0),
    entries: 0
}, {
    id: '3',
    title: 'Blog 3',
    content: "this is the testing content 3",
    createdAt: moment(0).add(2, 'days').valueOf(),
    entries: 0
}]