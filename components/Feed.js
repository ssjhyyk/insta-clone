import Posts from "./Posts";
import Stories from "./Stories";

function feed() {
  return (
    <main className='grid grid-cols-1 md-grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
        <div className='col-span-2'>
            <section>
                {/* Stories */}
                <Stories/>
                <Posts/>
                {/* Posts */}
            </section>
            
            <section>
                {/* mini profile */}
                {/* Suggestions */}
            </section>

        </div>
    </main>
  )
}

export default feed;