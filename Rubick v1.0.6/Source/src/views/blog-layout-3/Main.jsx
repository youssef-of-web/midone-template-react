import { Lucide, Tippy } from "@/base-components";
import { faker as $f } from "@/utils";

function Main() {
  return (
    <>
      <div className="intro-y news xl:w-3/5 p-5 box mt-8">
        {/* BEGIN: Blog Layout */}
        <h2 className="intro-y font-medium text-xl sm:text-2xl">
          {$f()[0].news[0].title}
        </h2>
        <div className="intro-y text-slate-600 dark:text-slate-500 mt-3 text-xs sm:text-sm">
          {$f()[0].dates[0]} <span className="mx-1">•</span>
          <a className="text-primary" href="">
            {$f()[0].products[0].category}
          </a>
          <span className="mx-1">•</span> 7 Min read
        </div>
        <div className="intro-y mt-6">
          <div className="news__preview image-fit">
            <img
              alt="Midone Tailwind HTML Admin Template"
              className="rounded-md"
              src={$f()[0].images[0]}
            />
          </div>
        </div>
        <div className="intro-y flex relative pt-16 sm:pt-6 items-center pb-6">
          <Tippy
            tag="a"
            href=""
            className="intro-x w-8 h-8 sm:w-10 sm:h-10 flex flex-none items-center justify-center rounded-full border border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500 mr-2"
            content="Bookmark"
          >
            <Lucide icon="Bookmark" className="w-3 h-3" />
          </Tippy>
          <div className="intro-x flex mr-3">
            <div className="intro-x w-8 h-8 sm:w-10 sm:h-10 image-fit">
              <Tippy
                tag="img"
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full border border-white zoom-in"
                src={$f()[0].photos[0]}
                content={$f()[0].users[0].name}
              />
            </div>
            <div className="intro-x w-8 h-8 sm:w-10 sm:h-10 image-fit -ml-4">
              <Tippy
                tag="img"
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full border border-white zoom-in"
                src={$f()[0].photos[1]}
                content={$f()[0].users[1].name}
              />
            </div>
            <div className="intro-x w-8 h-8 sm:w-10 sm:h-10 image-fit -ml-4">
              <Tippy
                tag="img"
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full border border-white zoom-in"
                src={$f()[0].photos[2]}
                content={$f()[0].users[2].name}
              />
            </div>
          </div>
          <div className="absolute sm:relative -mt-12 sm:mt-0 w-full flex text-slate-600 dark:text-slate-500 text-xs sm:text-sm">
            <div className="intro-x mr-1 sm:mr-3">
              Comments:
              <span className="font-medium">{$f()[0].totals[0]}</span>
            </div>
            <div className="intro-x mr-1 sm:mr-3">
              Views: <span className="font-medium">{$f()[0].totals[1]}k</span>
            </div>
            <div className="intro-x sm:mr-3 ml-auto">
              Likes: <span className="font-medium">{$f()[0].totals[2]}k</span>
            </div>
          </div>
          <Tippy
            tag="a"
            href=""
            className="intro-x w-8 h-8 sm:w-10 sm:h-10 flex flex-none items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 ml-auto sm:ml-0"
            content="Share"
          >
            <Lucide icon="Share2" className="w-3 h-3" />
          </Tippy>
          <Tippy
            tag="a"
            href=""
            className="intro-x w-8 h-8 sm:w-10 sm:h-10 flex flex-none items-center justify-center rounded-full bg-primary text-white ml-2"
            content="Download PDF"
          >
            <Lucide icon="Share" className="w-3 h-3" />
          </Tippy>
        </div>
        <div className="intro-y text-justify leading-relaxed">
          <p className="mb-5">{$f()[1].news[0].content}</p>
          <p className="mb-5">{$f()[2].news[0].content}</p>
          <p>{$f()[3].news[0].content}</p>
        </div>
        <div className="intro-y flex text-xs sm:text-sm flex-col sm:flex-row items-center mt-5 pt-5 border-t border-slate-200/60 dark:border-darkmode-400">
          <div className="flex items-center">
            <div className="w-12 h-12 flex-none image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src={$f()[0].photos[0]}
              />
            </div>
            <div className="ml-3 mr-auto">
              <a href="" className="font-medium">
                {$f()[0].users[0].name}
              </a>
              , Author
              <div className="text-slate-500">Senior Frontend Engineer</div>
            </div>
          </div>
          <div className="flex items-center text-slate-600 dark:text-slate-500 sm:ml-auto mt-5 sm:mt-0">
            Share this post:
            <Tippy
              tag="a"
              href=""
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
              content="Facebook"
            >
              <Lucide icon="Facebook" className="w-3 h-3 fill-current" />
            </Tippy>
            <Tippy
              tag="a"
              href=""
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
              content="Twitter"
            >
              <Lucide icon="Twitter" className="w-3 h-3 fill-current" />
            </Tippy>
            <Tippy
              tag="a"
              href=""
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border dark:border-darkmode-400 ml-2 text-slate-400 zoom-in"
              content="Linked In"
            >
              <Lucide icon="Linkedin" className="w-3 h-3 fill-current" />
            </Tippy>
          </div>
        </div>
        {/* END: Blog Layout */}
        {/* BEGIN: Comments */}
        <div className="intro-y mt-5 pt-5 border-t border-slate-200/60 dark:border-darkmode-400">
          <div className="text-base sm:text-lg font-medium">2 Responses</div>
          <div className="news__input relative mt-5">
            <Lucide
              icon="MessageCircle"
              className="w-5 h-5 absolute my-auto inset-y-0 ml-6 left-0 text-slate-500"
            />
            <textarea
              className="form-control border-transparent bg-slate-100 pl-16 py-6 resize-none"
              rows="1"
              placeholder="Post a comment..."
            ></textarea>
          </div>
        </div>
        <div className="intro-y mt-5 pb-10">
          <div className="pt-5">
            <div className="flex">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-none image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src={$f()[0].photos[0]}
                />
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center">
                  <a href="" className="font-medium">
                    {$f()[0].users[0].name}
                  </a>
                  <a href="" className="ml-auto text-xs text-slate-500">
                    Reply
                  </a>
                </div>
                <div className="text-slate-500 text-xs sm:text-sm">
                  {$f()[0].formattedTimes[0]}
                </div>
                <div className="mt-2">{$f()[0].news[0].shortContent}</div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-5 border-t border-slate-200/60 dark:border-darkmode-400">
            <div className="flex">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex-none image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src={$f()[0].photos[1]}
                />
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center">
                  <a href="" className="font-medium">
                    {$f()[0].users[1].name}
                  </a>
                  <a href="" className="ml-auto text-xs text-slate-500">
                    Reply
                  </a>
                </div>
                <div className="text-slate-500 text-xs sm:text-sm">
                  {$f()[1].formattedTimes[0]}
                </div>
                <div className="mt-2">{$f()[1].news[0].shortContent}</div>
              </div>
            </div>
          </div>
        </div>
        {/* END: Comments */}
      </div>
    </>
  );
}

export default Main;
