USE [master]
GO
/****** Object:  Database [Gauravverma]    Script Date: 8/17/2022 12:16:47 AM ******/
CREATE DATABASE [Gauravverma]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Gauravverma', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Gauravverma.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Gauravverma_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Gauravverma_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Gauravverma] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Gauravverma].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Gauravverma] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Gauravverma] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Gauravverma] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Gauravverma] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Gauravverma] SET ARITHABORT OFF 
GO
ALTER DATABASE [Gauravverma] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Gauravverma] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Gauravverma] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Gauravverma] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Gauravverma] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Gauravverma] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Gauravverma] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Gauravverma] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Gauravverma] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Gauravverma] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Gauravverma] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Gauravverma] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Gauravverma] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Gauravverma] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Gauravverma] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Gauravverma] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Gauravverma] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Gauravverma] SET RECOVERY FULL 
GO
ALTER DATABASE [Gauravverma] SET  MULTI_USER 
GO
ALTER DATABASE [Gauravverma] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Gauravverma] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Gauravverma] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Gauravverma] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Gauravverma] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Gauravverma] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Gauravverma', N'ON'
GO
ALTER DATABASE [Gauravverma] SET QUERY_STORE = OFF
GO
USE [Gauravverma]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 8/17/2022 12:16:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Departments]    Script Date: 8/17/2022 12:16:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Departments](
	[DepartmentId] [int] IDENTITY(1,1) NOT NULL,
	[DepartmentName] [nvarchar](max) NULL,
 CONSTRAINT [PK_Departments] PRIMARY KEY CLUSTERED 
(
	[DepartmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employees]    Script Date: 8/17/2022 12:16:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employees](
	[EmployeeId] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeName] [nvarchar](max) NULL,
	[DepartmentId] [int] NOT NULL,
	[DateOfJoining] [datetime2](7) NOT NULL,
	[PhotoPath] [nvarchar](max) NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[EmployeeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20220815164713_initial', N'5.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20220815165753_ChangeinRelation', N'5.0.0')
GO
SET IDENTITY_INSERT [dbo].[Departments] ON 

INSERT [dbo].[Departments] ([DepartmentId], [DepartmentName]) VALUES (1, N'IT')
INSERT [dbo].[Departments] ([DepartmentId], [DepartmentName]) VALUES (2, N'Manager')
INSERT [dbo].[Departments] ([DepartmentId], [DepartmentName]) VALUES (3, N'PayRoll')
SET IDENTITY_INSERT [dbo].[Departments] OFF
GO
SET IDENTITY_INSERT [dbo].[Employees] ON 

INSERT [dbo].[Employees] ([EmployeeId], [EmployeeName], [DepartmentId], [DateOfJoining], [PhotoPath]) VALUES (1, N'gaurav verma', 1, CAST(N'2022-08-16T06:43:01.8710000' AS DateTime2), N'photo.png')
INSERT [dbo].[Employees] ([EmployeeId], [EmployeeName], [DepartmentId], [DateOfJoining], [PhotoPath]) VALUES (2, N'test', 1, CAST(N'2022-08-16T06:43:01.8710000' AS DateTime2), N'photo.png')
SET IDENTITY_INSERT [dbo].[Employees] OFF
GO
/****** Object:  Index [IX_Employees_DepartmentId]    Script Date: 8/17/2022 12:16:49 AM ******/
CREATE NONCLUSTERED INDEX [IX_Employees_DepartmentId] ON [dbo].[Employees]
(
	[DepartmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_Departments_DepartmentId] FOREIGN KEY([DepartmentId])
REFERENCES [dbo].[Departments] ([DepartmentId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_Departments_DepartmentId]
GO
USE [master]
GO
ALTER DATABASE [Gauravverma] SET  READ_WRITE 
GO
