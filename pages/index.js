import Layout from '@/components/Layout'
// import { API_URL } from '@/config/index'
export default function HomePage({ events }) {
console.log('HomePage', events);
return (
<Layout>
<h1>Upcoming Events</h1>
</Layout>
)
}
// export async function getServerSideProps() {
// const res = await fetch(`${API_URL}/api/events`);
// const events = await res.json();
// console.log('getServerSideProps', events);
// return {
// props: {
// events,
// },
// };
// }
// export async function getStaticProps() {
// const res = await fetch(`${API_URL}/api/events`)
// const events = await res.json()
// console.log('getStaticProps', events);
// return {
// props: { events },
// revalidate: 1,
// }
// }