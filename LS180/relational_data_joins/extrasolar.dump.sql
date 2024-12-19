--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Postgres.app)
-- Dumped by pg_dump version 17.2 (Postgres.app)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: spectral_type; Type: TYPE; Schema: public; Owner: rossocarroll
--

CREATE TYPE public.spectral_type AS ENUM (
    'O',
    'B',
    'A',
    'F',
    'G',
    'K',
    'M'
);


ALTER TYPE public.spectral_type OWNER TO rossocarroll;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: moons; Type: TABLE; Schema: public; Owner: rossocarroll
--

CREATE TABLE public.moons (
    id integer NOT NULL,
    designation integer NOT NULL,
    semi_major_axis numeric,
    mass numeric,
    planet_id integer,
    CONSTRAINT moons_mass_check CHECK ((mass > (0)::numeric)),
    CONSTRAINT moons_semi_major_axis_check CHECK ((semi_major_axis > (0)::numeric))
);


ALTER TABLE public.moons OWNER TO rossocarroll;

--
-- Name: moons_id_seq; Type: SEQUENCE; Schema: public; Owner: rossocarroll
--

CREATE SEQUENCE public.moons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.moons_id_seq OWNER TO rossocarroll;

--
-- Name: moons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rossocarroll
--

ALTER SEQUENCE public.moons_id_seq OWNED BY public.moons.id;


--
-- Name: planets; Type: TABLE; Schema: public; Owner: rossocarroll
--

CREATE TABLE public.planets (
    id integer NOT NULL,
    designation character varying(1) NOT NULL,
    mass numeric,
    star_id integer NOT NULL,
    semi_major_axis numeric NOT NULL,
    CONSTRAINT valid_mass CHECK ((mass > (0)::numeric))
);


ALTER TABLE public.planets OWNER TO rossocarroll;

--
-- Name: planets_id_seq; Type: SEQUENCE; Schema: public; Owner: rossocarroll
--

CREATE SEQUENCE public.planets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.planets_id_seq OWNER TO rossocarroll;

--
-- Name: planets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rossocarroll
--

ALTER SEQUENCE public.planets_id_seq OWNED BY public.planets.id;


--
-- Name: stars; Type: TABLE; Schema: public; Owner: rossocarroll
--

CREATE TABLE public.stars (
    id integer NOT NULL,
    name character varying(50),
    distance numeric NOT NULL,
    spectral_type public.spectral_type,
    companions integer NOT NULL,
    CONSTRAINT stars_companions_check CHECK ((companions >= 0)),
    CONSTRAINT stars_distance_check CHECK ((distance > (0)::numeric))
);


ALTER TABLE public.stars OWNER TO rossocarroll;

--
-- Name: stars_id_seq; Type: SEQUENCE; Schema: public; Owner: rossocarroll
--

CREATE SEQUENCE public.stars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.stars_id_seq OWNER TO rossocarroll;

--
-- Name: stars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rossocarroll
--

ALTER SEQUENCE public.stars_id_seq OWNED BY public.stars.id;


--
-- Name: moons id; Type: DEFAULT; Schema: public; Owner: rossocarroll
--

ALTER TABLE ONLY public.moons ALTER COLUMN id SET DEFAULT nextval('public.moons_id_seq'::regclass);


--
-- Name: planets id; Type: DEFAULT; Schema: public; Owner: rossocarroll
--

ALTER TABLE ONLY public.planets ALTER COLUMN id SET DEFAULT nextval('public.planets_id_seq'::regclass);


--
-- Name: stars id; Type: DEFAULT; Schema: public; Owner: rossocarroll
--

ALTER TABLE ONLY public.stars ALTER COLUMN id SET DEFAULT nextval('public.stars_id_seq'::regclass);


--
-- Data for Name: moons; Type: TABLE DATA; Schema: public; Owner: rossocarroll
--



--
-- Data for Name: planets; Type: TABLE DATA; Schema: public; Owner: rossocarroll
--



--
-- Data for Name: stars; Type: TABLE DATA; Schema: public; Owner: rossocarroll
--

INSERT INTO public.stars VALUES (1, 'Alpha Centauri B', 4, 'K', 3);
INSERT INTO public.stars VALUES (2, 'Alpha Orionis', 643, 'M', 9);


--
-- Name: moons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rossocarroll
--

SELECT pg_catalog.setval('public.moons_id_seq', 1, false);


--
-- Name: planets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rossocarroll
--

SELECT pg_catalog.setval('public.planets_id_seq', 1, false);


--
-- Name: stars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rossocarroll
--

SELECT pg_catalog.setval('public.stars_id_seq', 4, true);


--
-- Name: moons moons_pkey; Type: CONSTRAINT; Schema: public; Owner: rossocarroll
--

ALTER TABLE ONLY public.moons
    ADD CONSTRAINT moons_pkey PRIMARY KEY (id);


--
-- Name: planets planets_designation_key; Type: CONSTRAINT; Schema: public; Owner: rossocarroll
--

ALTER TABLE ONLY public.planets
    ADD CONSTRAINT planets_designation_key UNIQUE (designation);


--
-- Name: planets planets_pkey; Type: CONSTRAINT; Schema: public; Owner: rossocarroll
--

ALTER TABLE ONLY public.planets
    ADD CONSTRAINT planets_pkey PRIMARY KEY (id);


--
-- Name: stars stars_pkey; Type: CONSTRAINT; Schema: public; Owner: rossocarroll
--

ALTER TABLE ONLY public.stars
    ADD CONSTRAINT stars_pkey PRIMARY KEY (id);


--
-- Name: stars unique_name; Type: CONSTRAINT; Schema: public; Owner: rossocarroll
--

ALTER TABLE ONLY public.stars
    ADD CONSTRAINT unique_name UNIQUE (name);


--
-- Name: planets fk_star_id; Type: FK CONSTRAINT; Schema: public; Owner: rossocarroll
--

ALTER TABLE ONLY public.planets
    ADD CONSTRAINT fk_star_id FOREIGN KEY (star_id) REFERENCES public.stars(id);


--
-- Name: moons moons_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rossocarroll
--

ALTER TABLE ONLY public.moons
    ADD CONSTRAINT moons_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planets(id);


--
-- PostgreSQL database dump complete
--

