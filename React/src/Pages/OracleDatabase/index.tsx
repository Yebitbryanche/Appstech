import { Link } from "react-router-dom";
import { OracleData } from "../../data/oracleData";
import { ShieldCheckIcon, ServerIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const OracleDatabase = () => {
    return (
        <div className="py-16 px-6 bg-gray-50">
            {/* Header Section */}
            <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-4xl font-extrabold text-primary tracking-tight">
                    Oracle Database
                </h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    Oracle Database helps customers lower IT costs and deliver a higher quality of
                    service by enabling consolidation onto database clouds and engineered systems
                    like Oracle Exadata and Oracle Database Appliance. It’s proven to be fast, reliable,
                    secure and easy to manage for all types of database workloads including enterprise
                    applications, data warehouses and big data analysis.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {OracleData.map((item, index) => {
                    // Choose an icon based on title
                    const Icon =
                        index % 3 === 0
                            ? ShieldCheckIcon
                            : index % 3 === 1
                            ? ServerIcon
                            : LockClosedIcon;

                    return (
                        <Link
                            key={item.title}
                            to={item.link}
                            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 object-cover transform hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <Icon className="w-6 h-6 text-blue-600" />
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default OracleDatabase;
