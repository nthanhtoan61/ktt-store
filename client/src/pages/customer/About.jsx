// About.jsx - Trang giới thiệu về shop và thành viên
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaCode, FaDatabase, FaLaptopCode, FaAward, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import PageBanner from '../../components/PageBanner';
import { useTheme } from '../../contexts/CustomerThemeContext';

// Dữ liệu thành tựu của trường
const achievements = [
  {
    icon: FaUserGraduate,
    title: 'Sinh viên',
    value: '38,000+',
    description: 'Sinh viên đã và đang học tại trường'
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Giảng viên',
    value: '725+',
    description: 'Đội ngũ giảng viên giàu kinh nghiệm'
  },
  {
    icon: FaAward,
    title: 'Thành tựu',
    value: '500+',
    description: 'Doanh nghiệp đối tác'
  }
];

// Dữ liệu thành viên
const teamMembers = [
  {
    name: 'Trần Đình Thành',
    role: 'Front-End Developer',
    birthday: '23/10/2005',
    avatar: 'https://picsum.photos/400/400',
    icon: FaLaptopCode,
    skills: ['React', 'TailwindCSS', 'JavaScript', 'HTML/CSS'],
    color: 'blue',
    class: 'CD23LM1',
    description: 'Sinh viên năm 2 ngành Công nghệ thông tin, đam mê phát triển giao diện người dùng và trải nghiệm người dùng.'
  },
  {
    name: 'Nguyễn Thanh Toàn',
    role: 'Back-End Developer',
    birthday: '15/03/2001',
    avatar: 'https://picsum.photos/401/400',
    icon: FaCode,
    skills: ['Node.js', 'Express', 'MongoDB', 'RESTful API'],
    color: 'green',
    class: 'CD23LM1',
    description: 'Sinh viên năm 2 ngành Công nghệ thông tin, chuyên về phát triển back-end và xử lý dữ liệu.'
  },
  {
    name: 'Nguyễn Duy Khôi',
    role: 'Database Administrator',
    birthday: '20/07/1998',
    avatar: 'https://picsum.photos/402/400',
    icon: FaDatabase,
    skills: ['SQL', 'MongoDB', 'Database Design', 'Data Modeling'],
    color: 'purple',
    class: 'CD23LM1',
    description: 'Sinh viên năm 2 ngành Công nghệ thông tin, đam mê về cơ sở dữ liệu và quản trị hệ thống.'
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const About = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen">
      <PageBanner 
        title="Về Chúng Tôi" 
        description="Đội ngũ phát triển KTT Store"
      />

      {/* Main content */}
      <div className={`py-16 ${theme === 'tet' ? 'bg-red-50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          {/* Shop Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center max-w-4xl mx-auto mb-20 p-8 rounded-2xl ${
              theme === 'tet' 
                ? 'bg-white/80 shadow-red-100'
                : 'bg-white'
            } shadow-xl`}
          >
            <motion.h2 
              className={`text-4xl font-bold mb-6 ${
                theme === 'tet' ? 'text-red-600' : 'text-blue-600'
              }`}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              KTT Store
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              KTT Store là dự án website thương mại điện tử được phát triển bởi sinh viên trường Cao đẳng Công nghệ Thông tin TP.HCM.
              Chúng tôi áp dụng những kiến thức đã học để tạo ra một platform mua sắm trực tuyến hiện đại, 
              mang đến trải nghiệm mua sắm tốt nhất cho người dùng.
            </motion.p>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                variants={itemVariants}
                className="p-4 rounded-lg bg-blue-50 text-blue-600"
              >
                <h3 className="font-semibold mb-2">Sứ mệnh</h3>
                <p className="text-sm">Mang đến những sản phẩm thời trang chất lượng cao với giá cả hợp lý</p>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="p-4 rounded-lg bg-green-50 text-green-600"
              >
                <h3 className="font-semibold mb-2">Tầm nhìn</h3>
                <p className="text-sm">Trở thành một dự án mẫu cho sinh viên CNTT</p>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="p-4 rounded-lg bg-purple-50 text-purple-600"
              >
                <h3 className="font-semibold mb-2">Giá trị cốt lõi</h3>
                <p className="text-sm">Sáng tạo - Học hỏi - Phát triển</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* College Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center max-w-6xl mx-auto mb-20 p-8 rounded-2xl ${
              theme === 'tet' 
                ? 'bg-white/80 shadow-red-100'
                : 'bg-white'
            } shadow-xl`}
          >
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              {/* College Logo */}
              <div className="md:w-1/3">
                <img 
                  src="/images/logo_itc.jpeg" 
                  alt="ITC Logo" 
                  className="w-full max-w-[300px] mx-auto"
                />
              </div>
              
              {/* College Info */}
              <div className="md:w-2/3 text-left">
                <motion.h2 
                  className={`text-3xl font-bold mb-4 ${
                    theme === 'tet' ? 'text-red-600' : 'text-blue-600'
                  }`}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Trường Cao Đẳng Công Nghệ Thông Tin TP.HCM
                </motion.h2>
                <motion.p 
                  className="text-gray-600 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Trường Cao đẳng Công nghệ Thông tin Tp.HCM (ITC) là một trong những cơ sở đào tạo hàng đầu về công nghệ thông tin tại TP.HCM. 
                  Với hơn 24+ năm kinh nghiệm, ITC đã đào tạo hàng ngàn sinh viên thành những chuyên gia CNTT có tay nghề cao, 
                  đáp ứng nhu cầu của thị trường lao động trong kỷ nguyên số.
                </motion.p>
              </div>
            </div>

            {/* Achievements */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={achievement.title}
                  variants={itemVariants}
                  className={`p-6 rounded-lg ${
                    theme === 'tet' 
                      ? 'bg-red-50 text-red-600' 
                      : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  <achievement.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{achievement.value}</h3>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm opacity-80">{achievement.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Team Members */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`relative overflow-hidden rounded-2xl ${
                  theme === 'tet' ? 'bg-white/80' : 'bg-white'
                } shadow-xl`}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 opacity-10 pattern-dots pattern-${member.color}-500 pattern-size-4 pattern-diagonal-lines`} />

                {/* Content */}
                <div className="relative p-6">
                  {/* Avatar */}
                  <motion.div
                    className="w-32 h-32 mx-auto mb-6 relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className={`absolute inset-0 rounded-full bg-${member.color}-200 animate-pulse`} />
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                    />
                    <motion.div
                      className={`absolute -right-2 -bottom-2 w-10 h-10 bg-${member.color}-500 rounded-full flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <member.icon size={20} />
                    </motion.div>
                  </motion.div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className={`text-${member.color}-600 font-medium mb-2`}>{member.role}</p>
                    <p className="text-gray-500 text-sm mb-2">Lớp: {member.class}</p>
                    <p className="text-gray-500 text-sm mb-4">Sinh ngày: {member.birthday}</p>
                    
                    <p className="text-gray-600 text-sm mb-4 italic">
                      "{member.description}"
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm bg-${member.color}-100 text-${member.color}-600`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      <motion.a
                        href="#"
                        whileHover={{ y: -3 }}
                        className={`text-${member.color}-500 hover:text-${member.color}-600`}
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ y: -3 }}
                        className={`text-${member.color}-500 hover:text-${member.color}-600`}
                      >
                        <FaLinkedin size={20} />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ y: -3 }}
                        className={`text-${member.color}-500 hover:text-${member.color}-600`}
                      >
                        <FaFacebook size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
