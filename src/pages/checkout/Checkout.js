import { useState, useEffect } from "react";
import {
  useWeb3Transfer,
  useMoralis,
  useNewMoralisObject,
} from "react-moralis";
import { toast } from "react-toastify";

const Checkout = () => {
  const { Moralis, user } = useMoralis();

  const { save } = useNewMoralisObject("Transaction");

  const saveObject = async () => {
    const data = {
      buyer: user,
      price: "0.5",
      status: "pending",
    };

    save(data, {
      onSuccess: (data) => {
        toast.success(`Order place successfully with a id of ${data.id}`);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const { fetch, error, isFetching, data } = useWeb3Transfer({
    amount: Moralis.Units.ETH(0.5),
    receiver: "0xEF6e88E8756A8d594BEf5642598E206A23c3f759",
    type: "native",
  });

  const createTransaction = async () => {
    const web3 = await Moralis.enableWeb3();
    try {
      fetch();
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (error) toast.error(error.message);
    if (data) saveObject();
  }, [error, data]);

  return (
    <div>
      <section>
        <h1 className="sr-only">Checkout</h1>

        <div className="relative mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="py-12 bg-gray-50 md:py-24">
              <div className="max-w-lg px-4 mx-auto lg:px-8">
                <div className="flex items-center">
                  <span className="w-10 h-10 bg-blue-900 rounded-full"></span>

                  <h2 className="ml-4 font-medium">BambooYou</h2>
                </div>

                <div className="mt-8">
                  <p className="text-2xl font-medium tracking-tight">$99.99</p>
                  <p className="mt-1 text-sm text-gray-500">
                    For the purchase of
                  </p>
                </div>

                <div className="mt-12">
                  <div className="flow-root">
                    <ul className="-my-4 divide-y divide-gray-200">
                      <li className="flex items-center justify-between py-4">
                        <div className="flex items-start">
                          <img
                            alt="Trainer"
                            src="https://images.unsplash.com/photo-1565299999261-28ba859019bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                            className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                          />

                          <div className="ml-4">
                            <p className="text-sm">Vibrant Trainers</p>

                            <dl className="mt-1 space-y-1 text-xs text-gray-500">
                              <div>
                                <dt className="inline">Color:</dt>
                                <dd className="inline">Blue</dd>
                              </div>

                              <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">UK 10</dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm">
                            $49.99
                            <small className="text-gray-500">x1</small>
                          </p>
                        </div>
                      </li>

                      <li className="flex items-center justify-between py-4">
                        <div className="flex items-start">
                          <img
                            alt="Lettuce"
                            src="https://images.unsplash.com/photo-1640958904159-51ae08bd3412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                            className="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                          />

                          <div className="ml-4">
                            <p className="text-sm">Lettuce</p>

                            <dl className="mt-1 space-y-1 text-xs text-gray-500">
                              <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">Big</dd>
                              </div>
                            </dl>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm">
                            $25
                            <small className="text-gray-500">x2</small>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-12 bg-white md:py-24">
              <div className="max-w-lg px-4 mx-auto lg:px-8">
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-3">
                    <label
                      className="block mb-1 text-sm text-gray-600"
                      htmlFor="first_name"
                    >
                      First Name
                    </label>

                    <input
                      className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                      type="text"
                      id="frst_name"
                    />
                  </div>

                  <div className="col-span-3">
                    <label
                      className="block mb-1 text-sm text-gray-600"
                      htmlFor="last_name"
                    >
                      Last Name
                    </label>

                    <input
                      className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                      type="text"
                      id="last_name"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      className="block mb-1 text-sm text-gray-600"
                      htmlFor="email"
                    >
                      Email
                    </label>

                    <input
                      className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      className="block mb-1 text-sm text-gray-600"
                      htmlFor="phone"
                    >
                      Phone
                    </label>

                    <input
                      className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                      type="tel"
                      id="phone"
                    />
                  </div>

                  <div className="col-span-6">
                    <button
                      className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                      onClick={() => createTransaction()}
                      disabled={isFetching}
                    >
                      Pay nows
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
