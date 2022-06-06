import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  const { title, poster_path } = router.query;
  return (
    <>
      <h4>{title}</h4>
    </>
  );
}
