import { Suspense } from "react/cjs/react.production.min"
const Main = () => {
    return (
        <Suspense fallback={<div>...</div>}>
        <div>Truong Dung</div>
        </Suspense>
    )
}

export default Main