export default function SubscriptionDetail({
    name,
    isPremium,
    remainingActiveDays,
    activeDays,
}) {
    const remainingDays = activeDays - remainingActiveDays;
    const loadingProgress = () => {
        const progress = remainingDays / activeDays;
        if (progress < 0.25) {
            return "w-3/12";
        } else if (progress < 0.5) {
            return "w-6/12";
        } else if (progress < 0.75) {
            return "w-9/12";
        } else {
            return "w-full";
        }
    };
    return (
        <>
            {/* BASIC */}
            {!isPremium && (
                <div className="mt-auto pr-[30px]">
                    <div className="p-5 bg-[#CCCCFF] rounded-[25px]">
                        <div className="mt-4 mb-8 text-lg font-semibold text-black">
                            {name}
                        </div>
                        <div className="mb-2 text-sm text-black">
                            {remainingActiveDays} of {activeDays} days
                        </div>
                        <div className="rounded-full w-full h-[6px] bg-[#333333]">
                            <div
                                className={`rounded-full h-full bg-alerange ${loadingProgress()}`}
                            ></div>
                        </div>
                    </div>
                </div>
            )}

            {/* PREMIUM */}
            {isPremium && (
                <div className="mt-auto pr-[30px]">
                    <div className="p-5 bg-black rounded-[25px]">
                        <img src="/icons/ic_star-rounded.svg" alt="" />
                        <div className="mt-4 mb-8 text-lg font-semibold text-white">
                            {name}
                        </div>
                        <div className="mb-2 text-sm text-white">
                            {remainingActiveDays} of {activeDays} days
                        </div>
                        <div className="rounded-full w-full h-[6px] bg-[#333333]">
                            <div
                                className={`rounded-full h-full bg-alerange ${loadingProgress()}`}
                            ></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
