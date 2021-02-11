import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

export default function RedocPage() {
  return <SwaggerUI url="/petstore.yaml" />;
}