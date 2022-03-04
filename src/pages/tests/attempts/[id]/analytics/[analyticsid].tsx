import React from 'react';
import { useRouter } from 'next/router';

const Component = () => {
  const router = useRouter()
  const { id, analyticsid } = router.query
  return (<div>Analytics {id} - {analyticsid}</div>);
}

export default Component;
