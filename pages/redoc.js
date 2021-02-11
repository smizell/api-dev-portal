import { RedocStandalone } from 'redoc';

export default function RedocPage() {
  return <RedocStandalone specUrl="/petstore.yaml" />;
}